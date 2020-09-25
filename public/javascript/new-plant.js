const newFormHandler = async function(event) {
    event.preventDefault();

    const species_id = document.querySelector('select[name="plant_species_id"]').value;
    const identifier = document.querySelector('input[name="plant_identifier"]').value;
    const acquired_date = document.querySelector('input[name="plant_acquired_date"]').value;
    const acquired_source = document.querySelector('input[name="plant_acquired_source"]').value;
    const acquired_origin = document.querySelector('input[name="plant_acquired_origin"]').value;
    const acquired_width = document.querySelector('input[name="plant_acquired_width"]').value;
    const acquired_height = document.querySelector('input[name="plant_acquired_height"]').value;
    const acquired_additional_info = document.querySelector('textarea[name="plant_acquired_additional_info"]').value;

    const token = localStorage.getItem("token");

    await fetch('/new-plant', {
        method: "POST",
        body: JSON.stringify({
            species_id,
            identifier,
            acquired_date,
            acquired_source,
            acquired_origin,
            acquired_width,
            acquired_height,
            acquired_additional_info
        }),
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        }
    }).then(res => 
        res.json()
    ).then(
        //once the plant is created redirect user to edit page for the new plant_id
        data => document.location.replace('https://weed-it.herokuapp.com/edit-plant/' + data.plant_id)
    );
};

document.querySelector("#new-plant-form").addEventListener("submit", newFormHandler);