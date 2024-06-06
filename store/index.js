export const actions = {
    fetchAnnualReport(context){
        return this.$axios.get('/api/annual-reports'); // done
    },
    fetchRups(context){
        return this.$axios.get('/api/rups'); // done
    },
    fetchShareholder(context){
        return this.$axios.get('/api/informasi-pemegang-saham'); // done
    },
    fetchFiancialReportYearly(context){
        return this.$axios.get('/api/laporan-keuangan-tahunan'); // done
    },
    fetchFiancialReportMiddleYearly(context){
        return this.$axios.get('/api/laporan-keuangan-tengah-tahunan'); // done
    },
    fetchSupportingProfessionalInstitution(context){
        return this.$axios.get('/api/lembaga-profesi-penunjang'); // done
    },
    fetchAwards(context){
        return this.$axios.get('/api/penghargaan'); // done
    },
    fetchWorkGuidelines(context){
        return this.$axios.get('/api/pedoman-kerja-komisaris-direksi'); // done
    },
    fetchAuditCommittee(context){
        return this.$axios.get('/api/piagam-audit'); // done
    },
    fetchCodeOfConduct(context){
        return this.$axios.get('/api/kode-etik'); // done
    },
    fetchRiskManagement(context){
        return this.$axios.get('/api/manajemen-risiko'); // done
    },
    fetchInformationCommitteeAudit(context){
        return this.$axios.get('/api/informasi-komite-audit'); // done
    },
    fetchCorporateSocialResponsibility(context){
        return this.$axios.get('/api/sosial-perusahaan'); // done
    },
    fetchPublicExpose(context){
        return this.$axios.get('/api/public-expose'); // done
    },
}
