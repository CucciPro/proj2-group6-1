// window.Handlebars.registerHelper('select', function( value, options ){
//     var $el = $('<select />').html( options.fn(this) );
//     $el.find('[value="' + value + '"]').attr({'selected':'selected'});
//     return $el.html();
// });

const editFormHandler = async function(event) {
    event.preventDefault();

    const plant_id = document.querySelector('input[name="plant_id"]').value;
    const species_id = document.querySelector('select[name="plant_species_id"]').value;
    const identifier = document.querySelector('input[name="plant_identifier"]').value;
    const acquired_date = document.querySelector('input[name="plant_acquired_date"]').value;
    const acquired_source = document.querySelector('input[name="plant_acquired_source"]').value;
    const acquired_origin = document.querySelector('input[name="plant_acquired_origin"]').value;
    const acquired_width = document.querySelector('input[name="plant_acquired_width"]').value;
    const acquired_height = document.querySelector('input[name="plant_acquired_height"]').value;
    const acquired_additional_info = document.querySelector('textarea[name="plant_acquired_additional_info"]').value;

    const token = localStorage.getItem("token");

    await fetch('/edit-plant', {
        method: "PUT",
        body: JSON.stringify({
            plant_id,
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
    });

    //this errors but doesn't seem to be needed anyhow
    //document.location.replace("/edit-plant/${plant_id}");
};

document.querySelector("#edit-plant-form").addEventListener("submit", editFormHandler);