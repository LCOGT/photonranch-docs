
## Mount

```javascript
example_mount_command = {
    device: 'mount1',
    type: 'mount',
    timestamp: 1558111000,
    action: 'go',
    required_params: {
        ra: 15.4,
        dec: 76.21,
    },
    optional_params: {}
}
mount_actions = [
    'go', 
    'stop', 
    'home', 
    'flat_panel', 
    'tracking', 
    'park',
]
mount_commands = {
    go: {
        required_params: {
            ra:'(float) decimal right ascension', 
            dec:'(float) decimal declination'
        },
        optional_params: {
            tracking_rate_ra:'(float), defaults to sidereal', 
            tracking_rate_dec:'(float), defaults to 0',
        }
    },
    stop: {
        required_params: {},
        optional_params: {},
    },
    home: {  
        required_params: {},
        optional_params: {},
    },
    flat_panel: {  
        required_params: {},
        optional_params: {},
    },
    tracking: {  
        required_params: {
            tracking: '(str) on or off'
        },
        optional_params: {
            ra_rate: '(str) defaults to sidereal',
            dec_rate: '(str) defaults to 0',
        },
    },
    park: {  
        required_params: {},
        optional_params: {},
    },
}

```