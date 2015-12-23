import Library from './Library';
import Util from './Util';

var a = new Library ({id: "rockandroll"})
console.log ( a.foo() + Util.add(3,5) );

export default Library;
export { Util };
