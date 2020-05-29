import React, { useEffect } from 'react';
import './App.css';
import { getAlbumID, getAlbumImages } from "./utilites/API";

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
        console.log(tmpAlbumIdFromImages);
    }, [albumIdArray]);

    return <div>

    </div>
};

export default App;