import React, { useEffect } from 'react';
import './App.css';
import { getAlbumID, getAlbumImages } from "./utilites/API";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const App = () => {
    const [albumIdArray, setAlbumIdArray] = React.useState();
    const [albumOfImages, setAlbumOfImages] = React.useState();
    useEffect(() => {
        getAlbumID()
            .then(res => setAlbumIdArray(res.data.data));
    }, []);

    useEffect(() => {
        let tmpAlbumIdFromImages = [];
        albumIdArray && albumIdArray.map((hash) => {
            getAlbumImages(hash)
                .then(res => tmpAlbumIdFromImages.push(
                    {
                        id: hash,
                        images: res.data.data,
                    }
                ));
        });
        albumIdArray && setAlbumOfImages(tmpAlbumIdFromImages);
    }, [albumIdArray]);

    console.log(albumOfImages);

    return (
        <div>
            <Router>
                {albumOfImages && albumOfImages.length >= 1 && albumOfImages.map((album) => {
                    return (
                        <Link to={`/${album}`}>{album}</Link>)
                })
                }
            </Router>
        </div>
    );
};

export default App;