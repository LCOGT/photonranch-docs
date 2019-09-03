# Observatory Command Syntax
Observatory commands are json strings that instruct devices at an observatory to do some action. The syntax follows the same general pattern regardless of the type of device. 

Each command is required to contain the following keys:
- **device** (string): the generic type of device to recieve instructions.
- **instance** (string): the alias representing the specific targeted device.
- **timestamp** (int): the unix timestamp just before the command is sent, in units of seconds (note: this is not the javascript timestamp which is denoted in miliseconds)
- **action** (string): this describes the general action being requested.
- **required_params** (json): one or more key/value pairs with specific parameters needed to fulfill the requested action.
- **optional_params** (json): zero or more key/value pairs which are not necessary for the requested action, but may be related.

