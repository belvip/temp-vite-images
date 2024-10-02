import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useGlobalContext } from './context';


const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`;

{/*const url = 'https://api.unsplash.com/search/photos?client_id=hu9bDzPYgDvgY9BdIbX2weSKhAze6SO2v9DgcjZY9qg';
{/*console.log(import.meta.env.VITE_API_KEY);*/}

function Gallery() {
    const { searchTerm } = useGlobalContext();
    // Fetch data using React Query
    const { data, isLoading, isError } = useQuery({
        queryKey: ['images', searchTerm],
        queryFn: async () => {
        const result = await axios.get(`${url}&query=${searchTerm}`);
        return result.data; // Returning the entire data from the API
        },
    });

    // Handle loading state
    if (isLoading) {
        return (
        <section className='image-container'>
            <h4>Loading...</h4>
        </section>
        );
    }

    // Handle error state
    if (isError) {
        return (
        <section className='image-container'>
            <h4>There was an error ...</h4>
        </section>
        );
    }

    // Check if data is available and results exist
    const results = data?.results;
    if (!results || results.length < 1) {
        return (
        <section className='image-container'>
            <h4>No results found ...</h4>
        </section>
        );
    }

    // Render the images
    return (
        <section className='image-container'>
        {results.map((item) => {
            const url = item?.urls?.regular;
            return (
            <img
                src={url}
                key={item.id}
                alt={item.alt_description}
                className='img'
            />
            );
        })}
        </section>
    );
}

export default Gallery;
