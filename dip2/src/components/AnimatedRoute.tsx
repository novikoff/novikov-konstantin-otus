import React, { PureComponent } from 'react'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'


class AnimatedRoute extends PureComponent<any, any> {

    render(): JSX.Element {
        return (
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '100vm',
                height: '100vh',
                boxSizing: 'border-box',
            }}>
                <Route {...this.props} />
            </div>
        )
    }
}

const wrapMyComponent = withRouter(AnimatedRoute)
export { wrapMyComponent as AnimatedRoute }


// export withRouter(AnimatedRoute) as
