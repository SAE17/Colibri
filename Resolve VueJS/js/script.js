new Vue({
    el: '.form_container',
    data: {
        distance: 0,
    },
    methods:{
        toCount: function (distance) {
            let first_distance = 999;
            let price = 0;
            if (distance <= first_distance){
                price = (distance * 0.5).toFixed(2);
            }
            else if (distance >= 1000 && distance < 2000){
                let second_distance = distance - first_distance;
                price = ((first_distance * 0.5) + (second_distance * 0.45)).toFixed(2)
            }
            else if (distance >= 2000){
                let second_distance = 1000;
                let third_distance = distance - (second_distance + first_distance);
                price = (first_distance * 0.5) + (second_distance * 0.45) + (third_distance * 0.4);
            }
            return price;
        }
    }
})