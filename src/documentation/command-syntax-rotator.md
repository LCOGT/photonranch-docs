## Rotator

```js
example_rotate_command = {
    instance: 'rotator2', 
    device: 'rotator',
    timestamp: 1558111000,
    action: 'move_relative',
    required_params: {
        position: -45,
    },
    optional_params: {},
}
rotator_actions = [ 'move_relative', 'move_absolute', 'home' ]
rotator_commands = {
    move_relative: {
        required_params: {
            position: '(float) degrees from current position, + or -',
        },
        optional_params: {},
    },
    move_absolute: {
        required_params: {
            position: '(float) degrees from 0 position, in rnage [0,360]',
        },
        optional_params: {}
    },
    home: {
        required_params: {},
        optional_params: {},
    }
}

```