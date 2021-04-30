import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

interface IProps {
    animationClassName: string
    animationTimeout: number
    children: any
}

export const AnimatedSwitch = ({ animationClassName, animationTimeout, children }: IProps) => (
    <Route render={({ location } : any) => (
        <TransitionGroup style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            boxSizing: 'border-box',
        }}>
            <CSSTransition
                key={location.key}
                timeout={animationTimeout}
                classNames={animationClassName}
            >
                <Switch location={location}>
                    {children}
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )} />
)
