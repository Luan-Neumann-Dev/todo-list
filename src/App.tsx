import Text from "./components/text";
import TrashIcon from './assets/icons/trash.svg?react';

export function App() {
  return (
    <div className="flex flex-col gap-2">
       <Text variant='body-sm-bold' className="text-pink-base">Olá mundo!</Text>
       <Text variant='body-md-bold' className="text-green-base">Olá mundo!</Text>
       <Text variant='body-md'>Olá mundo!</Text>

       
    </div>
  )
}