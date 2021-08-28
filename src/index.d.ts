import * as Eris from 'eris';
import * as Util from './util';
import * as Constants from './constants';
import ActionRow from './classes/ActionRow';
import Button from './classes/Button';
import Menu from './classes/Menu';
import MenuOption from './classes/MenuOption';
/**
 * The Eris client.
 * @param  {Eris.Client} ErisClient
 * @param  {object} options
 * @returns Eris
 */
declare function Client(
    ErisClient: Eris.Client,
    options?: {
        debug?: boolean;
        invalidClientInstanceError?: boolean;
        ignoreRequestErrors?: boolean;
    } = {
        debug: false,
        invalidClientInstanceError: true,
        ignoreRequestErrors: false,
    }
): Eris.Client;
declare const _default: {
    Client: typeof Client;
    ActionRow: typeof ActionRow;
    Button: typeof Button;
    Menu: typeof Menu;
    MenuOption: typeof MenuOption;
    Util: typeof Util;
    Constants: typeof Constants;
};
export = _default;
