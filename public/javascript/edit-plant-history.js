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
    //once the history record is updated redirect user to edit plant page so they can see their history record
    alert("The plant has been successfully updated!");
    data => document.location.replace('http://localhost:3001/edit-plant/' + data.plant_id)
};
document.querySelector("#edit-plant-history").addEventListener("submit", newFormHandler);
