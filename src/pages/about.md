---
layout: ../layouts/AboutLayout.astro
---

<main>
      <article>
        <div class="about-me">
          <div class="title">
            <hr />
            <h1 class="text-center text-2xl mt-2 font-medium">About Me</h1>
            <hr />
          </div>
          <div class="about text-base">
            <p>
              I’m Vikki, a CS Student and a Full-Stack Web Developer from
              India. I’m not picky about what I work with; I dive into anything
              that gets the job done. I love crafting automation scripts and
              websites that make life easier, whether it’s through my trusty
              terminal or just a couple of clicks.
            </p>
            <p>
              As I’m still a student I sometimes work as a freelancer. If I’m
              not working on any freelance project then I often spend my time
              working on personal projects, or trying out new technologies I
              find interesting. Besides that I also read books, annoy my cats,
              study psychology for fun (it’s just a random subject I’m
              interested in).
            </p>
            <p>
              As the tech industry is moving forward to new and inovative stuff
              I’m trying to learn and maintain the old-school ways of
              programming along with the new trends. I’m currently learning
              about systems programming. Playing around with C and Assembly
              language to get a more indepth knowledge of how everything works.
              I’m not a god-like programmer I just love learning new things from
              time to time to keep myself updated to new things.
            </p>
            <p>
              Also, I LOVE listening to music I listen to music like 80% of the
              time.
            </p>
          </div>
        </div>
        <slot />
        <div class="setup-details">
          <div class="title">
            <hr />
            <h1 class="text-center text-xl md:text-2xl mt-2 font-medium">
              Setup
            </h1>
            <hr />
          </div>
          <div class="setup">
            <h3 class="text-xl md:text-2xl font-medium mt-4">Hardware</h3>
            <ul class="my-4 grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
              <li class="spec-card p-4">
                <h3 class="text-base md:text-lg">PC Specs (Custom Built)</h3>
                <ul>
                  <li>MotherBoard: MSI B350M BAZOOKA</li>
                  <li>CPU: Ryzen 5 3400g (with VEGA 11)</li>
                  <li>RAM: 2x8GB XPG DDR4</li>
                  <li>SSD: 512GB Samsung EVO m.2 NVMe</li>
                  <li>Monitor: Samsung Odyssey G5 27-inches (FLAT)</li>
                  <li>Keyboard: HOU JI Z88 with Outemu Blue Switch</li>
                  <li>Mouse: HP M260</li>
                </ul>
              </li>
              <li class="spec-card p-4">
                <h3 class="text-base md:text-lg">
                  Laptop Specs (HP G14s 14-inches)
                </h3>
                <ul>
                  <li>CPU: Ryzen 3 5300u (with VEGA 8)</li>
                  <li>RAM: 8GB DDR4</li>
                  <li>SSD: 512GB Samsung 860 PRO</li>
                </ul>
              </li>
              <li class="spec-card p-4">
                <h3 class="text-base md:text-lg">Additional</h3>
                <ul>
                  <li>Phone: Moto g40 fusion </li>
                  <li>Tablet: Oppo Pad Air (for reading)</li>
                </ul>
              </li>
              <li class="spec-card p-4">
                <h3 class="text-base md:text-lg">Software</h3>
                <ul>
                  <li>OSes: Win10, Debian sid (unstable), Arch (i3wm)</li>
                  <li>Editor: VSCode, Neovim (AstroNvim)</li>
                  <li class="text-sm md:text-base">
                    Notes: Notion, Obsidian
                  </li>
                  <li>Music: Spotify, VLC</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </main>
