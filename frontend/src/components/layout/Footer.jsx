import Container from '../ui/Container'

function Footer() {
  return (
    <footer className="bg-[image:var(--footer-bg)] text-white">
      <Container className="py-6">
        <p className="text-center text-sm font-semibold text-emerald-50/80">
          Copyright {new Date().getFullYear()} Grow More Consultants
        </p>
      </Container>
    </footer>
  )
}

export default Footer
