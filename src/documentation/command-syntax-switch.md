## Switch

```js
example_switch_command = {
    device: 'switch_1', 
    type: 'switch',
    timestamp: 1558111000,
    action: 'pulse',
    required_params: {
        period: 600
    },
    optional_params: {
        init_state: 'OFF'
    },
}
switch_actions = [ 'on', 'off', 'pulse' ]
switch_commands = {
    on: {
        required_params: {},
        optional_params: {
            values: '(list) of arguments that might be needed for the device.'
        },
    },
    off: {
        required_params: {},
        optional_params: {
            values: '(list) of arguments that might be needed for the device.'
        },
    },
    pulse: {
        required_params: {
            period: '(int) seconds for a complete on/off cycle.' +
                    ' note: device will be on for only half period.',
        },
        optional_params: {
            init_state: '(str) ON or OFF. Defaults to ON if not provided.',
            values: '(list) of arguments that might be needed for the device.'
        },
    },
}

```