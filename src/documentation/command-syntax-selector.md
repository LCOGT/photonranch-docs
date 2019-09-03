## Selector 
(typcally 4-position indexing mirror)

```js
example_selector_command = {
    instance: 'selector1', 
    device: 'selector',
    timestamp: 1558111000,
    action: 'set_position',
    required_params: {
        position: 2,
    },
    optional_params: {},
}
selector_actions = [ 'set_position' ]
selector_commands = {
    set_position: {
        required_params: {
            position: '(int) 1-indexed position.',
        },
        optional_params: {},
    },
}

```