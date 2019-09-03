## Enclosure

```js
example_enclosure_command = {
    device: 'enclosure_1', 
    type: 'enclosure',
    timestamp: 1558111000,
    action: 'open',
    required_params: {},
    optional_params: {},
}
enclosure_actions = [ 
    'open', 
    'close', 
    'slew_alt', 
    'slew_az', 
    'sync_az',
    'sync_mount', 
    'park', 
]
enclosure_commands = {
    open: {
        required_params: {},
        optional_params: {},
    },
    close: {
        required_params: {},
        optional_params: {},
    },
    slew_alt: {
        required_params: {
            altitude: '(float) move to reveal this altitude'
        },
        optional_params: {},
    },
    slew_az: {
        required_params: {
            azimuth: '(float) move to this azimuth'
        },
        optional_params: {},
    },
    sync_az: {
        required_params: {
            azimuth: '(float) sync to this azimuth'
        },
        optional_params: {},
    },
    sync_mount: {
        required_params: {
            mount: '(str) name of mount to sync with.'
        },
        optional_params: {},
    },
    park: {
        required_params: {},
        optional_params: {},
    }
}
```