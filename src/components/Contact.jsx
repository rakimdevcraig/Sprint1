function Contact({ darkMode }) {
  return (
    <>
      <section className="contact">
        <p
          style={{
            textDecorationColor: darkMode ? "var(--light)" : "var(--dark)",
          }}
        >
          I can be contacted at rakimdevcraig@gmail.com
        </p>
      </section>
    </>
  );
}
export default Contact;
