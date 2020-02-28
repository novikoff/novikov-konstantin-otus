const util = require('util');
const fs = require('fs');
const readdir = util.promisify(fs.readdir);
const path = require('path');
const stat = util.promisify(fs.stat);

var args = process.argv.slice(2);
const my_path = args[0];

var global_dir = path.dirname(my_path);
start_dir = path.basename(my_path);


getdir = (temp_dir) => {
    return new Promise(function(resolve, reject) {
        let el_arrays = {
            files: [],
            dirs: []
        };
        el_arrays.dirs.push(temp_dir);
        readdir(path.join(global_dir, temp_dir)).then(in_dir => {
            path_elem_arr = in_dir.map(function(currentValue, index, arr) {
                return path.join(temp_dir, currentValue);
            });
            in_promises = [];
            if (path_elem_arr.length > 0) {
                path_elem_arr.forEach((el) => {
                    in_promises.push(
                        new Promise(function(resolve_el, reject_el) {
                            stat(path.join(global_dir, el)).then(stats => {
                                if (stats.isFile()) {
                                    el_arrays.files.push(el);
                                    resolve_el(el_arrays);
                                }
                                if (stats.isDirectory()) {
                                    getdir(el).then(in_dir => {
                                        if (in_dir.dirs.length > 0) {
                                            in_dir.dirs.forEach(folder => {
                                                el_arrays.dirs.push(folder);
                                            })
                                        }
                                        if (in_dir.files.length > 0) {
                                            in_dir.files.forEach(file => {
                                                el_arrays.files.push(file);
                                            })
                                        }
                                        resolve_el(el_arrays);
                                    });
                                }
                            })
                        })
                    );
                });
            }

            Promise.all(in_promises).then(responses => {
                resolve(el_arrays);
            });
        });
    });
}

getdir(start_dir).then(a => {
    console.log(JSON.stringify(a));
});