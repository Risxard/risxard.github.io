const API_URL = 'https://graphql.datocms.com/';
const API_TOKEN = '3858a754593e5bda85e9815e6a391d';

async function fetchCmsApi(query, { variables } = {}) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export const getAllProjects = async () => {
  const data = await fetchCmsApi(`
    {
        allPortfolioProjects(
            orderBy: _publicationScheduledAt_DESC
          ) {
            projectTitle
            projectDescription
            tags
            projectStatus
            projectImage {
              url
            }
            projectVideo {
              url
            }
            projectUrl
            repositoryUrl
          }
        allSkills{
            techName
            techImage{
              url
            }
        }
        allUsedSkills{
            techName
            techImage{
            url
          }
        }
    }`);

  return data;
}

export default { getAllProjects };
