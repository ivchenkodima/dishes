export const filteringObj = {
    cafes: [],
    addArr: function(data){
        this.cafes = data;
        return this;
    },
    findId: function(prop, find) {
        this.cafes = this.cafes.filter((item) => {
            return (
                +item[prop] == +find

            )
        });
        return this;
    },

    findPosition: function(id){
        let pos;
        this.cafes.forEach((item, index) => {
            if( item.id == id ) {
                return pos=index;
            }
        })
        return pos;

    },

    findCafe: function(find) {
        this.cafes = this.cafes.filter((item) => {
            return (
            item.nameRestaurant.toLowerCase().search(
                find.toString().toLowerCase()) !== -1
            )
        });
        return this;
    },
    filterKichen: function(find) {
        if (find.search && find.search.length > 0) {
            let cafes = this.cafes;
            console.log(find.search);

            let test = find.search.reduce((first, el) => {

                let filterSearch = cafes.filter((item) => {
                    return	item.typeKitchen.toLowerCase().replace(/\s+/g,'') == el.toLowerCase().replace(/\s+/g,'')
                });
                return first.concat(filterSearch);

            },[]);
            console.log(test);

            this.cafes = test;
        }
        return this;
    },
    minOrderFilter: function(find) {
        if (find > 0) {
            this.cafes = this.cafes.filter((item) => {
                return item.minOrder > find
            });
        }
        return this;
    },
    openApp: function (status){
        if (status){
            const hourNow = new Date().getHours();
            this.cafes = this.cafes.filter((item) => {
                return item.status.close > hourNow
                    && item.status.open < hourNow
            });
        }
        return this;
    },

    sort: function(status){
        // todo asc & desc
        if (status)
            this.cafe = this.cafes.sort((b, a) => a[status] - b[status]);
        return this;
    },

    sortMinOrder: function(status, sortType){
        if (status && sortType == 'ASC')
            this.cafe = this.cafes.sort((b, a) => a.minOrder - b.minOrder);
        if (status && sortType == 'DESC')
            this.cafe = this.cafes.sort((b, a) => a.minOrder - b.minOrder);
        return this;
    },

    showStep: function() {
        return this.cafes;
    }
};
