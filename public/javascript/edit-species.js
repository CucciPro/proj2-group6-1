const newFormHandler = async function(event) {
    event.preventDefault();

    const common_name = document.querySelector('input[name="species_common"]').value;
    const botanical_name = document.querySelector('input[name="species_botanical"]').value;
    const plant_type = document.querySelector('select[name="species_type"]').value;
    const hardiness_zones = document.querySelector('input[name="species_hardiness"]').value;
    const sun_tolerance = document.querySelector('input[name="species_tolerance"]').value;
    const drainage = document.querySelector('input[name="species_drainage"]').value;
    const water_requirements = document.querySelector('input[name="species_water"]').value;
    const feeding_schedule = document.querySelector('input[name="species_feeding"]').value;
    const growth_rate = document.querySelector('input[name="species_growth"]').value;
    const mature_width = document.querySelector('input[name="species_width"]').value;
    const mature_height = document.querySelector('input[name="species_height"]').value;
    const spacing = document.querySelector('input[name="species_spacing"]').value;
    const depth = document.querySelector('input[name="species_depth"]').value;
    const when_to_plant = document.querySelector('input[name="species_planting"]').value;
    const additional_info = document.querySelector('textarea[name="species_additional_info"]').value;

    const token = localStorage.getItem("token");

    await fetch('/edit-species', {
        method: "PUT",
        body: JSON.stringify({
            common_name,
            botanical_name,
            plant_type,
            hardiness_zones,
            sun_tolerance,
            drainage,
            water_requirements,
            feeding_schedule,
            growth_rate,
            mature_width,
            mature_height,
            spacing,
            depth,
            when_to_plant,
            additional_info
        }),
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        }
    });

    alert("The species has been successfully updated!");
};

document.querySelector("#edit-species-form").addEventListener("submit", editFormHandler);