/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 import 'zone.js/dist/zone';

 (window as any)['__Zone_disable_customElements'] = true;
 
 export const zoneRun = (callback?: () => void) => {
   return Zone.current.run(callback || (() => {}));
 };