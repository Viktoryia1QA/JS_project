const sendHttpRequest = require('../sendHttpRequest');
const axios = require('axios');

// for GET requests
const allBodyPositionSchema = require('../testData/astronomyData/allBodyPositionSchema.json');
const positionsForBodySchema = require('../testData/astronomyData/positionsForBodySchema.json');

// for POST request
const generateMoonChartSchema = require('../testData/astronomyData/generateMoonChartSchema.json');


describe('Astranomy test-suite', () => {

    let response;
    test('1.1 All Body Position - Check status-code 200 and validate JSON schema', async () => {
        response = await axios.get('https://astronomy.p.rapidapi.com/api/v2/bodies/positions', {
            params: {
                latitude: '33.775867',
                longitude: '-84.39733',
                from_date: '2022-03-03',
                to_date: '2022-03-03',
                elevation: '166',
                time: '12:00:00'
            },
            headers: {
                'X-RapidAPI-Host': 'astronomy.p.rapidapi.com',
                'X-RapidAPI-Key': 'e6b1cf0b39mshb9ed8d8d67b4a85p16b546jsnb0ea4cd6f1be'
            }
        })
        // console.log(response);

        await expect(response.status).toEqual(200);
        await expect(response).toBeValidSchema(allBodyPositionSchema);
    });

    test('1.2 All Body Position - Check status-code 403 and response message', async () => {
        const conf = {
            url: 'https://astronomy.p.rapidapi.com/api/v2/bodies/positions',
            params: {
                latitude: '33.775867',
                longitude: '-84.39733',
                from_date: '2022-03-03',
                to_date: '2022-03-03',
                elevation: '166',
                time: '12:00:00'
            },
            headers: {
                'X-RapidAPI-Host': 'astronomy.p.rapidapi.com',
                'X-RapidAPI-Key': 'e6b1cf0b39mshb9ed8d8d67b4a85p16b546jsnb0ea4cd6f1b'
            }
        }
        response = await sendHttpRequest(conf);

        // console.log(response.data.message);

        await expect(response).toBeValidStatusCode(403);
        await expect(response.data.message).toEqual('You are not subscribed to this API.');
    })

    test('1.3 All Body Position - Check status-code 422 and values > max of required fields (latitude/longitude/elevation)', async () => {
        const conf = {
            url: 'https://astronomy.p.rapidapi.com/api/v2/bodies/positions',
            params: {
                latitude: '91',
                longitude: '181',
                elevation: '5001',
                from_date: '2022-03-03',
                to_date: '2022-03-03',
                time: '12:00:00'
            },
            headers: {
                'X-RapidAPI-Host': 'astronomy.p.rapidapi.com',
                'X-RapidAPI-Key': 'e6b1cf0b39mshb9ed8d8d67b4a85p16b546jsnb0ea4cd6f1be'
            }
        }
        response = await sendHttpRequest(conf);

        // console.log(response.data.statusCode);
        // console.log(response.data.errors[0].message);
        // console.log(response.data.errors[1].message);
        // console.log(response.data.errors[2].message);


        await expect(response.data.statusCode).toEqual(422);
        // check >max latitude
        await expect(response.data.errors[0].message).toEqual('must be less than or equal to 90');
        // check >max longitude
        await expect(response.data.errors[1].message).toEqual('must be less than or equal to 180');
        // check >max elevation
        await expect(response.data.errors[2].message).toEqual('must be less than or equal to 5000');

    })

    test('1.4 All Body Position - Check status-code 422 and "date"/"time" format of required fields (from_date/to_date/time)', async () => {
        const conf = {
            url: 'https://astronomy.p.rapidapi.com/api/v2/bodies/positions',
            params: {
                latitude: '90',
                longitude: '180',
                elevation: '5000',
                from_date: 'May of 05',
                to_date: '25.02.2021',
                time: '12pm'
            },
            headers: {
                'X-RapidAPI-Host': 'astronomy.p.rapidapi.com',
                'X-RapidAPI-Key': 'e6b1cf0b39mshb9ed8d8d67b4a85p16b546jsnb0ea4cd6f1be'
            }
        }
        response = await sendHttpRequest(conf);

        // console.log(response.data.statusCode);
        // console.log(response.data.errors);
        // console.log(response.data.errors[1].message);
        // console.log(response.data.errors[2].message);

        await expect(response.data.statusCode).toEqual(422);
        // check date"/"time" format of required fields (from_date/to_date/time)
        await expect(response.data.errors[0].message).toEqual('does not conform to the "date" format');
        await expect(response.data.errors[1].message).toEqual('does not conform to the "date" format');
        await expect(response.data.errors[2].message).toEqual('does not conform to the "time" format');

    })

    test('2.1 Generate Moon Chart - Check status-code 200 and json schema validation', async () => {
        const conf = {
            url: 'https://astronomy.p.rapidapi.com/api/v2/studio/moon-phase',
            headers: {
                'Content-type': 'application/json',
                'X-RapidAPI-Host': 'astronomy.p.rapidapi.com',
                'X-RapidAPI-Key': 'e6b1cf0b39mshb9ed8d8d67b4a85p16b546jsnb0ea4cd6f1be'
            },
            data: {
                "format": "png",
                "observer": {
                    "date": "2022-03-03",
                    "latitude": 6.56774,
                    "longitude": 79.88956
                },
                "style": {
                    "backgroundColor": "red",
                    "backgroundStyle": "stars",
                    "headingColor": "white",
                    "moonStyle": "sketch",
                    "textColor": "red"
                },
                "view": {
                    "type": "portrait-simple"
                }
            }
        }
        response = await sendHttpRequest(conf, 'POST');

        // console.log(response.data.data.imageUrl);

        await expect(response).toBeValidStatusCode(200);
        await expect(response.data.data.imageUrl).toContain('.png');
        await expect(response).toBeValidSchema(generateMoonChartSchema);

    })

    test('2.2 Generate Moon Chart - Check status-code 403 and message', async () => {
        const conf = {
            url: 'https://astronomy.p.rapidapi.com/api/v2/studio/moon-phase',
            headers: {
                'Content-type': 'application/json',
                'X-RapidAPI-Host': 'astronomy.p.rapidapi.com',
                'X-RapidAPI-Key': 'e6b1cfa4cd6f1be'
            },
            data: {
                "format": "png",
                "observer": {
                    "date": "2022-03-03",
                    "latitude": 6.56774,
                    "longitude": 79.88956
                },
                "style": {
                    "backgroundColor": "red",
                    "backgroundStyle": "stars",
                    "headingColor": "white",
                    "moonStyle": "sketch",
                    "textColor": "red"
                },
                "view": {
                    "type": "portrait-simple"
                }
            }
        }
        response = await sendHttpRequest(conf, 'POST');

        await expect(response).toBeValidStatusCode(403);
        await expect(response.data.message).toEqual('You are not subscribed to this API.');


    })

    test('2.3 Generate Moon Chart - Check status-code 404 and message', async () => {
        const conf = {
            url: 'https://astronomy.p.rapidapi.com/api/v2/studio/moon-phase',
            headers: {
                'Content-type': 'application/json',
                'X-RapidAPI-Host': 'astronomy.api.com',
                'X-RapidAPI-Key': 'e6b1cfa4cd6f1be'
            },
            data: {
                "format": "png",
                "observer": {
                    "date": "2022-03-03",
                    "latitude": 6.56774,
                    "longitude": 79.88956
                },
                "style": {
                    "backgroundColor": "red",
                    "backgroundStyle": "stars",
                    "headingColor": "white",
                    "moonStyle": "sketch",
                    "textColor": "red"
                },
                "view": {
                    "type": "portrait-simple"
                }
            }
        }
        response = await sendHttpRequest(conf, 'POST');

        await expect(response).toBeValidStatusCode(404);
        await expect(response.data.message).toEqual("API doesn't exists");


    })

    test('2.4 Generate Moon Chart - Check status-code 422 and  and values > max of required fields (latitude/longitude)', async () => {
        const conf = {
            url: 'https://astronomy.p.rapidapi.com/api/v2/studio/moon-phase',
            headers: {
                'Content-type': 'application/json',
                'X-RapidAPI-Host': 'astronomy.p.rapidapi.com',
                'X-RapidAPI-Key': 'e6b1cf0b39mshb9ed8d8d67b4a85p16b546jsnb0ea4cd6f1be'
            },
            data: {
                "format": "png",
                "observer": {
                    "date": "2022-03-03",
                    "latitude": 91, //max=90
                    "longitude": 181 //max=180
                },
                "style": {
                    "backgroundColor": "red",
                    "backgroundStyle": "stars",
                    "headingColor": "white",
                    "moonStyle": "sketch",
                    "textColor": "red"
                },
                "view": {
                    "type": "portrait-simple"
                }
            }
        }
        response = await sendHttpRequest(conf, 'POST');

        // console.log(response.data);

        await expect(response.data.statusCode).toEqual(422);
        // check >max latitude
        await expect(response.data.errors[0].message).toEqual('must be less than or equal to 90');
        // check >max longitude
        await expect(response.data.errors[1].message).toEqual('must be less than or equal to 180');

    })

    test('3.1 Get positions for body "Venus" - Check status-code 200 and json schema validation', async () => {
        const conf = {
            url: 'https://astronomy.p.rapidapi.com/api/v2/bodies/positions/venus',
            params: {
                latitude: '33.775867',
                longitude: '-84.39733',
                from_date: '2022-03-03',
                to_date: '2022-03-03',
                elevation: '166',
                time: '12:00:00'
            },
            headers: {
                'X-RapidAPI-Host': 'astronomy.p.rapidapi.com',
                'X-RapidAPI-Key': 'e6b1cf0b39mshb9ed8d8d67b4a85p16b546jsnb0ea4cd6f1be'
            }
        }
        response = await sendHttpRequest(conf);

        // console.log(response);

        await expect(response).toBeValidStatusCode(200);
        await expect(response).toBeValidSchema(positionsForBodySchema);

    })

    test('3.2 Get positions for body "Venus" - Check status-code 403 and response message', async () => {
        const conf = {
            url: 'https://astronomy.p.rapidapi.com/api/v2/bodies/positions/venus',
            params: {
                latitude: '33.775867',
                longitude: '-84.39733',
                from_date: '2022-03-03',
                to_date: '2022-03-03',
                elevation: '166',
                time: '12:00:00'
            },
            headers: {
                'X-RapidAPI-Host': 'astronomy.p.rapidapi.com',
                'X-RapidAPI-Key': 'e6b0ea4cd6f1be'
            }
        }
        response = await sendHttpRequest(conf);

        // console.log(response);

        await expect(response).toBeValidStatusCode(403);
        await expect(response.data.message).toEqual('You are not subscribed to this API.');
    })

    test('3.3 Get positions for body "Venus" - Check status-code 404 and response message', async () => {
        const conf = {
            url: 'https://astronomy.p.rapidapi.com/api/v2/bodies/positions/venus',
            params: {
                latitude: '33.775867',
                longitude: '-84.39733',
                from_date: '2022-03-03',
                to_date: '2022-03-03',
                elevation: '166',
                time: '12:00:00'
            },
            headers: {
                'X-RapidAPI-Host': 'astro.api.com',
                'X-RapidAPI-Key': 'e6b1cf0b39mshb9ed8d8d67b4a85p16b546jsnb0ea4cd6f1be'
            }
        }
        response = await sendHttpRequest(conf);

        // console.log(response);

        await expect(response).toBeValidStatusCode(404);
        await expect(response.data.message).toEqual("API doesn't exists");

    })

    test('3.4 Get positions for body "Venus" - Check status-code 422 and values > max of required fields (latitude/longitude/elevation)', async () => {
        const conf = {
            url: 'https://astronomy.p.rapidapi.com/api/v2/bodies/positions/venus',
            params: {
                latitude: '91', //max = 90
                longitude: '181', //max = 180
                from_date: '2022-03-03',
                to_date: '2022-03-03',
                elevation: '5001',//max = 5000
                time: '12:00:00'
            },
            headers: {
                'X-RapidAPI-Host': 'astronomy.p.rapidapi.com',
                'X-RapidAPI-Key': 'e6b1cf0b39mshb9ed8d8d67b4a85p16b546jsnb0ea4cd6f1be'
            }
        }
        response = await sendHttpRequest(conf);

        // console.log(response.data.statusCode);
        // console.log(response.data.errors);

        await expect(response.data.statusCode).toEqual(422);
        // check >max latitude
        await expect(response.data.errors[0].message).toEqual('must be less than or equal to 90');
        // check >max longitude
        await expect(response.data.errors[1].message).toEqual('must be less than or equal to 180');
        // check >max elevation
        await expect(response.data.errors[2].message).toEqual('must be less than or equal to 5000');

    })

});