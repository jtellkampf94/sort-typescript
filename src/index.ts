import { LinkedList } from "./LinkedList";
import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("Xaayb");
sorter.collection = charactersCollection;
sorter.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-3);
linkedList.add(-10);
linkedList.add(4);
sorter.collection = linkedList;
sorter.sort();
linkedList.print();
