


const newFormHandler = async function(event) {
    event.preventDefault();

    const plant_id = document.querySelector('input[name="plant_id"]').value;
    const rec_type = document.querySelector('input[name="rec_type"]').value;
    const loc = document.querySelector('input[name="loc"]').value;
    const in_ground = document.querySelector('select[name="in_ground"]').value;
    const direct_sunlight_hours = document.querySelector('input[name="direct_sunlight_hours"]').value;
    const watering_schedule = document.querySelector('input[name="watering_schedule"]').value;
    const additional_info = document.querySelector('textarea[name="additional_info"]').value;

    const token = localStorage.getItem("token");

    await fetch('/new-plant-history', {
        method: "POST",
        body: JSON.stringify({
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
    }).then(res => 
        res.json()
    ).then(
        //once the plant is created redirect user to edit page for the new plant_id
        data => document.location.replace('http://localhost:3001/edit-plant/' + data.plant_id)
    );
};
document.querySelector("#new-plant-history").addEventListener("submit", newFormHandler); 