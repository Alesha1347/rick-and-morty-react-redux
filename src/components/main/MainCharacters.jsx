import {MainCharacter} from './MainCharacter'

import { useSelector } from "react-redux"
import {allSelectorsCharacters} from '../../store/characters/characters-selectors'

export function MainCharacters(){

    const {characters} = useSelector(allSelectorsCharacters)

    return (
        <div className="main__characters">
            {
                characters.map(character => {
                    return (
                        <MainCharacter
                        {...character}
                        key={character.id}
                        />
                    )
                })
            }
        </div>
    )
}