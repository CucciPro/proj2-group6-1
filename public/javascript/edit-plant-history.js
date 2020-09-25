const newFormHandler = async function(event) {
    event.preventDefault();

    const history_id = document.querySelector('input[name="plant_history_id"]').value;
    const plant_id = document.querySelector('input[name="plant_id"]').value;
    const rec_type = document.querySelector('input[name="rec_type"]').value;
    const loc = document.querySelector('input[name="loc"]').value;
    const in_ground = document.querySelector('select[name="in_ground"]').value;
    const direct_sunlight_hours = document.querySelector('input[name="direct_sunlight_hours"]').value;
    const watering_schedule = document.querySelector('input[name="watering_schedule"]').value;
    const additional_info = document.querySelector('textarea[name="additional_info"]').value;

    const token = localStorage.getItem("token");

    await fetch('/edit-plant-history', {
        method: "PUT",
        body: JSON.stringify({
            history_id,
            plant_id,
            rec_type,
            loc,
            in_ground,
            direct_sunlight_hours,
            watering_schedule,
            additional_info
        }),
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        }
    });
    //once the history record is updated redirect user to edit plant page so they can see all the history records
    alert("The history record has been successfully updated!");
    document.location.replace('https://weed-it.herokuapp.com/edit-plant/' + plant_id);
};
document.querySelector("#edit-plant-history").addEventListener("submit", newFormHandler); 