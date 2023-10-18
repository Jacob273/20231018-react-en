/**

 Default values for parameters in the function

 #Objective:
 Learning more "standards" in high-level languages,
 which were introduced into JavaScript after 2015

 */


function callMyGrandpa(name, phoneNo = '111-223-222', device = 'Motorola') {
	console.log('Grab', device, 'dial', phoneNo, 'call', name)
}

callMyGrandpa('Joseph');
callMyGrandpa('Stanley', '0000-1202917');
callMyGrandpa('John', '+48 601-284-212', 'Xiaomi');

