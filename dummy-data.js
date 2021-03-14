const DUMMY_PROJECTS = [
    {
        id: 'p1',
        title: 'Project Example 1',
        description: 'In this project bla bla bla.',
        date: '2000-03-20',
        isFeatured: false
    },
    {
        id: 'p2',
        title: 'Project Example 1',
        description: 'In this project bla bla bla.',
        date: '2000-03-20',
        isFeatured: true
    },
    {
        id: 'p3',
        title: 'Project Example 1',
        description: 'In this project bla bla bla.',
        date: '2000-03-20',
        isFeatured: true
    }
];

export function getFeaturedProjects() {
    return DUMMY_PROJECTS.filter((e) => e.isFeatured);
}

export function getAllProjects() {
    return DUMMY_PROJECTS;
}

export function getFilteredProjects(dateFilter) {
    const { year, month } = dateFilter;

    let getFilteredProjects = DUMMY_PROJECTS.filter((e) => {
        const projectDate = newDate(e.date);
        return projectDate.getFullYear() === year && projectDate.getMonth() === month - 1;
    });

    return getFilteredProjects;
}

export function getProjectById(id) {
    return DUMMY_PROJECTS.find((e) => e.id === id)
}