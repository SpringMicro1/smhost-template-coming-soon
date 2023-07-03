import { Navbar as DaisyNavbar, Dropdown, Button, Menu } from "react-daisyui";
import { METADATA } from "../../config";

export default function Navbar(navBarProps: any) {
  return (
    <DaisyNavbar {...navBarProps}>
      <DaisyNavbar.Start>
        <Dropdown>
          <Button color="ghost" tabIndex={0} className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </Button>
          <Dropdown.Menu tabIndex={0} className="w-52 menu-compact mt-3">
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item tabIndex={0}>
              <Menu.Details open={false} label={"Parent item"}>
                <Menu.Item>
                  <a>level 2 item 1</a>
                </Menu.Item>
                <Menu.Item>
                  <a>level 2 item 2</a>
                </Menu.Item>
                <Menu.Item>
                  <Menu.Details open={false} label={"Parent"}>
                    <Menu.Item>
                      <a>item 1</a>
                    </Menu.Item>
                    <Menu.Item>
                      <a>item 2</a>
                    </Menu.Item>
                  </Menu.Details>
                </Menu.Item>
              </Menu.Details>
            </Dropdown.Item>
            <Dropdown.Item>Item 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <a className="btn btn-ghost normal-case text-xl">
          {METADATA.COMPANY_NAME}
        </a>
      </DaisyNavbar.Start>
      <DaisyNavbar.Center className="hidden lg:flex">
        <Menu horizontal className="p-0">
          <Menu.Item>
            <a>Item 1</a>
          </Menu.Item>
          <Menu.Item tabIndex={0}>
            <Menu.Details open={false} label={"Parent item"}>
              <Menu.Item>
                <a>level 2 item 1</a>
              </Menu.Item>
              <Menu.Item>
                <a>level 2 item 2</a>
              </Menu.Item>
              <Menu.Item>
                <Menu.Details open={false} label={"Parent"}>
                  <Menu.Item>
                    <a>item 1</a>
                  </Menu.Item>
                  <Menu.Item>
                    <a>item 2</a>
                  </Menu.Item>
                </Menu.Details>
              </Menu.Item>
            </Menu.Details>
            {/* <Menu.Dropdown
              className="bg-base-100"
              label="Parent"
              onClick={toggleOpen}
              open={open}
            >
              <Menu.Item>
                <a>Submenu 1</a>
              </Menu.Item>
              <Menu.Item>
                <a>Submenu 2</a>
              </Menu.Item>
              <Menu.Item>
                <a>Submenu 3</a>
              </Menu.Item>
            </Menu.Dropdown> */}
          </Menu.Item>
          <Menu.Item>
            <a>Item 3</a>
          </Menu.Item>
        </Menu>
      </DaisyNavbar.Center>
      <DaisyNavbar.End>
        <Button>Get started</Button>
      </DaisyNavbar.End>
    </DaisyNavbar>
  );
}
