function SearchFilters() {
    return (
        <div>
            <form>
                <input type="text" id="trainerName" name="trainerName" placeholder="nombre entrenador.."></input>
                <label for="trainerName"></label>

                <p>Ha sido campeon?:</p>
                <input type="radio" id="isChampion1" name="isChampion" value="Si"></input>
                <label for="isChampion1">Sí</label><br/>
                <input type="radio" id="isChampion2" name="isChampion" value="No"></input>
                <label for="isChampion2">No</label>
            </form>
        </div>
    );
  }
  
  export default SearchFilters;