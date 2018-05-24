import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link} from 'react-router-dom';
import Detail from './Detail';
import Index from './Index';

const Home = props => (
    <div>
        hello router, i'm home.
        To <Link to='/page/3'>page</Link>
    </div>
);

const MainRouter = props => (
    <BrowserRouter>
        <Switch>
            <Redirect exact from='/' to='/home' />
            <Route path='/home' exact component={Home} />
            <Route path='/index' exact component={Index} />
            <Route path='/detail' component={Detail} />
            <Route path='/page/:pageId' render={(props) => {
                console.log('porps: ', props);
                return (
                    <div>
                        To <Link to='/detail'>detail</Link>
                    </div>
                );
            }} />
        </Switch>
    </BrowserRouter>
);

export default MainRouter;