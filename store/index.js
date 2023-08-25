export const actions = {
    fetchAnnualReport(context){
        return this.$axios.get('/api/annual-reports?populate=*');
    },
    fetchRups(context){
        return this.$axios.get('/api/rups?populate[easy_ksei][populate]&populate[rups][populate]=*&&populate[blanko_rups][populate]=*');
    },
    fetchShareholder(context){
        return this.$axios.get('/api/informasi-pemegang-saham?populate=*');
    },
    fetchFiancialReportYearly(context){
        return this.$axios.get('/api/laporan-keuangan-tahunans?populate=*');
    },
    fetchFiancialReportMiddleYearly(context){
        return this.$axios.get('/api/laporan-keuangan-tengah-tahunans?populate=*');
    },
    fetchSupportingProfessionalInstitution(context){
        return this.$axios.get('/api/lembaga-profesi-penunjang?populate=*');
    },
    fetchAwards(context){
        return this.$axios.get('/api/awards?populate=*');
    },
    fetchWorkGuidelines(context){
        return this.$axios.get('/api/pedoman-kerja-komisaris-dan-direksis?populate=*');
    },
    fetchAuditCommittee(context){
        return this.$axios.get('/api/piagam-audit?populate=*');
    },
    fetchCodeOfConduct(context){
        return this.$axios.get('/api/kode-etik?populate=*');
    },
    fetchRiskManagement(context){
        return this.$axios.get('/api/manajemen-risiko?populate=*');
    },
    fetchInformationCommitteeAudit(context){
        return this.$axios.get('/api/informasi-komite-audit?populate=*');
    },
    fetchCorporateSocialResponsibility(context){
        return this.$axios.get('/api/informasi-tanggung-jawab-sosial-perusahaan?populate=*');
    },
}
