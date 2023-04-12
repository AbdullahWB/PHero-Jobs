export const jobCategoryAndFeatureData = async () => {
    const jobCategory = await fetch('/Category.json')
    const category = await jobCategory.json()

    const jobFeatureData = await fetch('/CompanyDB.json')
    const featureData = await jobFeatureData.json()

    const blogData = await fetch('/Quotation.json')
    const blog = await blogData.json()

    const statisticData = await fetch('/Assingment.json')
    const statistic = await statisticData.json()

    // console.log(statistic);

    return {category, featureData, blog, statistic}
}
