/**
 * PUSH Notification server V 0.2
 * (c) Telefonica Digital, 2012 - All rights reserver
 * Fernando Rodríguez Sela <frsela@tid.es>
 * Guillermo Lopez Leal <gll@tid.es>
 */

/**
 * This software is made from different servers which are documented in the
 * /documentation folder. Check what each server does before changing
 * anything here. Every parameter is explained.
 * You should run the software as:
 * node main.js [TYPE]
 * where TYPE is NS_AS, NS_UA_WS, NS_UA_UDP, NS_UA_SMS or NS_MSG_monitor
 */


/********************* Common Queue ***********************************/
exports.queue = {
  port: 61613,
  host: 'localhost',
  debug: false,
  //Just for rabbitmq
  login: 'guest',
  passcode: 'guest'
};

exports.ddbbsettings = {
    host: "localhost",
    port: 27017,
    user: "",
    password: "",
    ddbbname: "push_notification_server",
    auto_reconnect: true,
    poolSize: 4,
    native_parser: false
};


/********************* NS_AS *****************************************/
/**
 * Public base URL to receive notifications
 */
exports.NS_AS = {
  publicBaseURL: "http://localhost:8081",

  /**
   * Binding interfaces and ports
   * [ iface, port ]
   */
  interfaces: [
    // Internal network
    {
      interface: "0.0.0.0",
      port: 8081 }/*,
    // External network
    {
      iface: "127.0.0.1",
      port: 8081,
    }*/
  ],

  server_info: {
    key: "12345678901234567890"
  }
};

/********************* NS_MSG_monitor ********************************/


/********************* NS_UA_WS **************************************/

/**
 * Websocket configuration
 * @see https://github.com/Worlize/WebSocket-Node/blob/master/lib/WebSocketServer.js
 */
exports.NS_UA_WS = {
  /**
   * Binding interfaces and ports
   * [ iface, port ]
   */
  interfaces: [
    // Internal network
    {
      interface: "0.0.0.0",
      port: 8080 }/*,
    // External network
    {
      interface: "127.0.0.1",
      port: 8081,
    }*/
  ],

  server_info: {
    key: "12345678901234567890"
  },

  websocket_params: {
    keepalive: true,
    keepaliveInterval: 40000,
    dropConnectionOnKeepaliveTimeout: true,
    keepaliveGracePeriod: 30000
  }
};

/********************* NS_UA_UDP *************************************/


/********************* NS_UA_SMS *************************************/