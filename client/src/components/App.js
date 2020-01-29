import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import StreamCreate from '../components/streams/streamCreate';
import StreamDelete from '../components/streams/streamDelete';
import StreamEdit from '../components/streams/streamEdit';
import StreamList from '../components/streams/streamList';
import StreamShow from '../components/streams/streamShow';
import Header from '../components/header';

const App = () => (
    <div className='ui container'>
        <BrowserRouter>
            <div>
                <Header />
                <Route exact path='/' component={StreamList} />
                <Route exact path='/streams/new' component={StreamCreate} />
                <Route exact path='/streams/delete' component={StreamDelete} />
                <Route exact path='/streams/edit' component={StreamEdit} />
                <Route exact path='/streams/show' component={StreamShow} />
            </div>
        </BrowserRouter>
    </div>
);

export default App;
