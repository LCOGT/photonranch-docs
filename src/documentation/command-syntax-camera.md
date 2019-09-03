
## Camera

This is an example command that would be sent in the command queue.
It will always include the device name, type, and timestamp.
It will also include three additional entries: 
  - action
  - required params
  - optional params

### Example Camera Command
```javascript
example_camera_command = {
    instance: 'camera1',
    device: 'camera',
    timestamp: 1558111000,
    action: 'expose',
    required_params: {
        time: 15.5, 
    },
    optional_params: {
        bin: 1,
        gain: 1,
        count: 3,
        filter: 'R',
        size: 1.0,
        keywords: [{observer: 'Tim'}, {project_code: 'M40'}]
    },
}
```


### Camera Actions
This lists the available actions the camera will accept.

```javascript
camera_actions = [ 
    'expose', 
    'stop' 
]
```

### Camera Parameters
For each possible action, the required and optional parameters to 
expect are described here.

```javascript
camera_parameters = {

    expose: {
        required_params: {
            time: '(float) exposure time in seconds', 
        },
        optional_params: {
            bin: '(int) defaults to 1',
            gain: '(int) defaults to ??',
            count: '(int) defaults to 1',
            filter: '(str) filter name; defaults to current value',
            modes: '(list of str) camera mode (eg. fast-readout, etc).',
            size: '(float) size of image to use, between 0.0 - 1.0. Centered.',
            dither: '(str) ON or OFF',
            dither_step_size: '(float) default value of 0 if not included.',
            keywords: '(list of dicts) defaults to []. Each dict in list ' +
                      'is a single key/val entry for the fits header.',
        },
    },

    stop: {
        required_params: {},
        optional_params: {},
    },
}
```