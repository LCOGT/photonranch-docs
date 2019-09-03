## Sequencer

```js
example_sequencer_command = {
    instance: 'sequencer', 
    device: 'sequencer',
    timestamp: 1558111000,
    action: 'run',
    required_params: {
        script: 'autofocus',
    },
    optional_params: {},
}
sequencer_actions = [ 'run', 'stop' ]
sequencer_commands = {
    run: {
        required_params: {
            script: '(str) name of script to run',
        },
        optional_params: {},
    },

    stop: {
        required_params: {},
        optional_params: {},
    }
}

```