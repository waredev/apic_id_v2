export const actions = {
    fetchAnnualReport(context){
        return this.$axios.get('/api/annual-reports?populate=*');
    }
}