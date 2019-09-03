## Focuser

```js
example_focuser_command = {
    device: 'focuser_1', 
    type: 'focuser',
    timestamp: 1558111000,
    action: 'move_relative',
    required_params: {
        position: -15,
    },
    optional_params: {},
}
focuser_actions = [ 'move_relative', 'move_absolute', 'stop', 'home', 'auto' ]
focuser_commands = {
    move_relative: {
        required_params: {
            position: '(float) microns from current position, + or -',
        },
        optional_params: {}
    },
    move_absolute: {
        required_params: {
            position: '(float) microns from home position, + or -',
        },
        optional_params: {}
    },
    stop: {
        required_params: {},
        optional_params: {},
    },
    home: { 
        required_params: {},
        optional_params: {},
    },
    auto: {
        required_params: {},
        optional_params: {},
    }
}

```