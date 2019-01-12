import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './container/login/login';
import Center from './container/center/center';
import Register from './container/register/register';
import Chat from './container/chat/chat';
import Message from './container/message/message';
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    <BrowserRouter>
                        <div>
                            <Route path='' exact component={Login}/>
                            <Route path='/login' exact component={Login}/>
                            <Route path='/register' exact component={Register}/>
                            <Route path='/chat' exact component={Chat}/>
                            <Route path='/message/:id' exact component={Message}/>
                            <Route path='/center/:id' exact component={Center}/>
                        </div>
                    </BrowserRouter>
                </Provider>
            </div>
        );
    }
}

export default App;
