const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList,GraphQLFloat } = graphql;

const Categories = require('../models/category');
const Items = require('../models/item');
const Similars = require('../models/similar');

const SimilarType = new GraphQLObjectType({
    name: 'Similar',
    fields: () => ({
        id: { type: GraphQLID },
        targetId: { type: GraphQLID },
        similar: {type: GraphQLList(GraphQLID)},
        items: {
            type: new GraphQLList(ItemType),
            resolve(parent,args){
                return Items.find({ _id : [...parent.similar]});
            }
        },
    })
});

const ItemType = new GraphQLObjectType({
    name: 'Item',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        price: { type: GraphQLFloat },
        img: { type: GraphQLString},
        description: { type: GraphQLString },
        categoryId: { type: GraphQLID },
        category: {
            type: CategoryType,
            resolve(parent,args){
                return Categories.findById(parent.categoryId)
            }
        },
        similar:{
            type: new GraphQLList(SimilarType),
            resolve(parent,args){
                let res = Similars.find({targetId:parent.id});
                console.log(res);
                return res;
            }
        }

    })
});

const CategoryType = new GraphQLObjectType({
    name: 'Category',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        items: {
            type: new GraphQLList(ItemType),
            resolve(parent,args){
                return Items.find({categoryId: parent.id})
            }
        },

    })
});


const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addCategory:{
            type: CategoryType,
            args: {
                name: {type: GraphQLString},
                description: {type: GraphQLString}
            },
            resolve(parent,args){
                const category = new Categories({
                    name: args.name,
                    description: args.description
                })
                return category.save();
            }
        },
        addItem:{
            type: ItemType,
            args: {
                title: {type: GraphQLString},
                price: { type: GraphQLFloat },
                img: { type: GraphQLString},
                description: {type: GraphQLString},
                categoryId: { type: GraphQLID },
            },
            resolve(parent,args){
                const item = new Items({
                    title: args.title,
                    price: args.price,
                    img: args.img,
                    description: args.description,
                    categoryId: args.categoryId
                })
                return item.save();
            }
        },
        addSimilar:{
            type: SimilarType,
            args: {
                targetId: {type: GraphQLID},
                similar: {type: GraphQLList(GraphQLID)}
            },
            resolve(parent,args){
                const similar = new Similars({
                    targetId: args.targetId,
                    similar: args.similar
                })
                return similar.save();
            }
        },
        removeCategory:{
            type: CategoryType,
            args: {
                id: {type: GraphQLID}
            },
            resolve(parent,args){
                return Categories.findByIdAndRemove(args.id);
            }
        },
        removeItem:{
            type: ItemType,
            args: {
                id: {type: GraphQLID}
            },
            resolve(parent,args){
                return Items.findByIdAndRemove(args.id);
            }
        },
        removeSimilar:{
            type: SimilarType,
            args: {
                id: {type: GraphQLID}
            },
            resolve(parent,args){
                return Similars.findByIdAndRemove(args.id);
            }
        }
    }
});

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        item:{
                type: ItemType,
                args: { id: { type: GraphQLID}},
                resolve(parent, args){
                    return Items.findById(args.id);
                }
            },
        category:{
            type: CategoryType,
            args: { id: { type: GraphQLID}},
            resolve(parent, args){
                return Categories.findById(args.id);
            }
        },
        items:{
                type: new GraphQLList(ItemType),
                resolve(parent, args){
                    return Items.find({});
                }
            },
        categories:{
            type: new GraphQLList(CategoryType),
            resolve(parent, args){
                return Categories.find({});
            }
        },
        similar:{
            type: SimilarType,
            args: { id: { type: GraphQLID}},
            resolve(parent, args){
                return Similars.findOne({targetId: args.id})
            }
        },
        similars:{
            type: new GraphQLList(SimilarType),
            resolve(parent, args){
                return Similars.find({});
            }
        }

    }
});

module.exports = new GraphQLSchema({
    query: Query,
    mutation: Mutation
});
