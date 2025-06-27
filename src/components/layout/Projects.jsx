import DomainVerificationRoundedIcon from "@mui/icons-material/DomainVerificationRounded";

export default function Projects() {
  return (
    <section
      id="aboutme"
      className="bg-white px-10 mx-4 md:mx-8 rounded-2xl shadow-lg shadow-gray-700 animate-center-fade"
    >
      <h2 className="flex items-center text-4xl font-bold text-indigo-900 py-14">
        <DomainVerificationRoundedIcon
          sx={{ fontSize: 40 }}
          className="inline-block"
        />
        My Projects
      </h2>
    </section>
  );
}
