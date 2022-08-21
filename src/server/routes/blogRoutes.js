import { Router } from 'express';
const blogs = [
  {
    title: 'Mentoring Opportunities',
    date: new Date(),
    author: 'John Doe',
    id: '1',
    post: `Are you a problem solver or a domain expert in a certain language/stack or field?
            Pass this knowledge on to those starting their career journey or switching from one field to another.
            The ALC gives you the opportunity to participate as a mentor where you can guide
            and unblock learners through their learning journey.`,
  },
  {
    title: 'Mentoring Opportunities',
    date: new Date(),
    author: 'John Doe',
    id: '2',
    post: `Are you a problem solver or a domain expert in a certain language/stack or field?
            Pass this knowledge on to those starting their career journey or switching from one field to another.
            The ALC gives you the opportunity to participate as a mentor where you can guide
            and unblock learners through their learning journey.`,
  },
  {
    title: 'Mentoring Opportunities',
    date: new Date(),
    author: 'John Doe',
    id: '4',
    post: `Are you a problem solver or a domain expert in a certain language/stack or field?
            Pass this knowledge on to those starting their career journey or switching from one field to another.
            The ALC gives you the opportunity to participate as a mentor where you can guide
            and unblock learners through their learning journey.`,
  },
  {
    title: 'Mentoring Opportunities',
    date: new Date(),
    author: 'John Doe',
    id: '5',
    post: `Are you a problem solver or a domain expert in a certain language/stack or field?
            Pass this knowledge on to those starting their career journey or switching from one field to another.
            The ALC gives you the opportunity to participate as a mentor where you can guide
            and unblock learners through their learning journey.`,
  },
];

const router = () => {
  const blogRoutes = Router();

  blogRoutes.route('/').get((req, res) => {
    return res.json(blogs);
  });

  return blogRoutes;
};

export default router;
