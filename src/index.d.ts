import * as Eris from 'eris';
import ActionRow from './classes/ActionRow';
import Button from './classes/Button';
import ErisComponentsCollector from './classes/ComponentsCollector';
import Menu from './classes/Menu';
import MenuOption from './classes/MenuOption';
import * as Constants from './constants';
import * as Util from './util';
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
    }
): ErisComponentsClient;

type Component = ActionRow | Button | Menu;
type Message = string | any;

declare class ErisComponentsClient extends Eris.Client {
    sendComponents(channel: string, components: Component | Component[],
        content: Message, file?: Eris.MessageFile | Eris.MessageFile[]): Promise<any>;
    editInteraction(resBody: any, components: Component | Component[],
        content: Message, file?: Eris.MessageFile | Eris.MessageFile[]): Promise<any>;
    // https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type
    replyInteraction(resBody: any, components: Component | Component[], content: Message,
        options?: { ephemeral: boolean }, type?: number, file?: Eris.MessageFile | Eris.MessageFile[]): Promise<any>;
    awaitComponents(filter: (body: any) => boolean, channel: string,
        options?: { time: number }, thisArg?: any): Promise<any>;
    createComponentsCollector(filter: (body: any) => boolean,
        channel: string, options: { time: number }, thisArg?: any): ErisComponentsCollector;
}

declare const _default: {
    Client: typeof Client;
    ActionRow: typeof ActionRow;
    Button: typeof Button;
    Menu: typeof Menu;
    MenuOption: typeof MenuOption;
    Util: typeof Util;
    Constants: typeof Constants;
    ErisComponentsClient: typeof ErisComponentsClient;
};
export = _default;
