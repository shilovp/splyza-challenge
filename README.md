# SplyzaChallenge

This project is done as a skill check challenge for **SPLYZA Inc**. 

## Design

Design file can be found by the following link: [FIGMA](https://www.figma.com/file/rl0Uj2w5GWfDBWxGsDkdWJ/DC%E2%9C%85-WEB-CHALLENGE-(design)?type=design&node-id=0-1&mode=design&t=kD8PaBxfLw7mxR36-0)

## Setup

First of all let's prepare the backend application:

>Please, note, that backend application missing one dependency in it's `package.json`, it's **rimraf**. Let's install it in the next steps as well.

1. `git clone https://github.com/splyza/video-box-server.git`
2. Install dependencies `npm i`
3. `npm i rimraf`
4. Run server: `npm start`. By default backend will be started on `localhost:3000`

Next step is setup frontend application:

1. Clone this repository: `git clone https://github.com/shilovp/splyza-challenge.git`
2. Install dependencies: `npm i`
3. Run application: `ng serve` or `npm start`
4. Go to `localhost:4200`

## Backend bugs observed:

### Bug with Snapshot reaction. 

For some reason snapshor reaction API returns an error message: 

```
{
    "headers": {
        "normalizedNames": {},
        "lazyUpdate": null
    },
    "status": 400,
    "statusText": "Bad Request",
    "url": "http://localhost:3000/api/videos/aaaaa2/reactions",
    "ok": false,
    "name": "HttpErrorResponse",
    "message": "Http failure response for http://localhost:3000/api/videos/aaaaa2/reactions: 400 Bad Request",
    "error": "Cannot read properties of undefined (reading 'split')"
}

```

Request from frontend:

```
{
    "videoId": "aaaaa2",
    "type": "snapshot",
    "timeframe": 0,
    "author": {
        "id": "xxxxx0",
        "name": "Tanaka Shigeru",
        "pictureUrl": "http://localhost:3000/images/tanaka-icon.png"
    },
    "video": {
        "id": "aaaaa2",
        "title": "My Video b",
        "description": "",
        "createdDate": "2022-08-05T14:48:00.000Z",
        "author": {
            "id": "xxxxx2",
            "name": "Michael Tshung",
            "pictureUrl": "http://localhost:3000/images/michael-icon.png"
        },
        "url": "http://localhost:3000/videos/small.mp4",
        "previewUrl": "http://localhost:3000/images/video-preview.png"
    }
}
```

Investigating the problem I found out there is something wrong with mapping in `ResourceFactory.buildVideoReactionResource`: 

```
  try {
        resourceItem = ResourceFactory.buildVideoReactionResource(
            requestItem,
            videoResource,
            LOGGED_IN_USER
        );
    } catch (e) {
        res.status(400).send((e as Error).message);
        return;
    }
```

Backend error log: 
```
{ videoId: 'aaaaa2', type:"snapshot', timeframe: 5.568 } // message received from frontend
TypeError: Cannot read properties of undefined (reading 'split') // and error building the resource
```

>The frontend part for sending snapshot reaction is prepared and should work properly right after backend is fixed. Fow now only Star reaction works properly.

### Rimraf missing package is described in setup step.

## Ideas for improvements

1. Responsive UI - I would make it responsive to properly suite mobile devices screens
2. Styles - I would rework styles a bit to improve namings in classes, probable using BEM or other methodology
3. Add autoscroll to top when pressing reaction row to scroll to the video (in case reaction list is long)
4. Add loaders (on loading list of video etc)
5. Add validations and error handling for backend responses
