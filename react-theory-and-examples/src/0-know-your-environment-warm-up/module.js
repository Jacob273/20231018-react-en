/**
 * This value is private when module.js is really treated as a module.
 *
 * Has access to the global scope, but what's inside this file
 * is the local scope of the module. Unavailable to other modules (importing it).
 * */

const privateVariable = 'Hello';
