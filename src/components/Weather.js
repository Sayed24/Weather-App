import { CropFree } from '@material-ui/icons';
import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { WeatherInput } from './WeatherInput';

export const Weather = () => {

    const [query, setQuery] = useState("");
    const [data, setData] = useState(null);

    const API_KEY = '9360eee2d1781c9b0102317aaf001056';
    const BASE_URL = 'http://api.weatherstack.com/current';

    return (
        <Container>
            <WeatherInput
                data={data}
                setData={setData}
                apiKey={API_KEY}
                baseUrl={BASE_URL}
                query={query}
                setQuery={setQuery}
            />
        </Container>
    );
};
