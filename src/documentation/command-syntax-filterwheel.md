
## Filter Wheel

 ```js
example_filterwheel_command = {
    device: 'filter_2',
    type: 'filter',
    timestamp: 1558111000,
    action: 'set_position',
    required_params: {
        wheel_positions: [
            {wheel: 0, position: 3},
            {wheel: 1, position: 5},
        ],
    },
    optional_params: {},
}
filter_actions = [ 'set_position', 'set_name', 'home' ]
filter_commands = {
    set_position: {
        required_params: {
            wheel_positions: '(list of dict) list contains positions for' +
                             ' each wheel in filter as a dict. Format:' +
                             ' {wheel:(int), position(int)}'
        },
        optional_params: {}
    },
    set_name: {
        required_params: {
            filter_name: '(str) name of filter to set. Site must implement.'
        },
        optional_params: {},
    },
    home: {
        required_params: {},
        optional_params: {},
    }
}
```