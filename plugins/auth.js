// DEVELOPMENT TOKEN
const DEVEL_TOKEN = 'f8d194d1ec0225853fbe0f98eb90412c1d542e0ac419f4c29da340ae83fea3723ddf23dde4e6fc5a53e6754d737e3b3215ef9bbefe41820cf0249d0a9d10a15abb7cff703a77ea28b8609f53d9c513f3877b0d449ad42e2da911f2293d7d6a0a0bc5f3bc6e6a4bfd816335e72584b86896cf45fa44dc3fdbd7b542d5d928a850';

// PRODUCTION TOKEN
const PROD_TOKEN = 'efced14f09f15938d52fa8292f99658c1000589017bb3500b69c73a213c328f8e2d84f775ebf61f3b877ad9b43b18e6617f1b3464ab9188caf376a7d291246da71abbac7b795f6bb76224353a650c6f8d4cbe96b9f64dae605e962f61992fec49b8cc4577cf8c3d8ec8a7e0466482e99538e3db7d43d76e07c6ec6319b2bf162';

export default ({store, app: { $axios }}) => {
    $axios.setToken(DEVEL_TOKEN, 'Bearer')
}